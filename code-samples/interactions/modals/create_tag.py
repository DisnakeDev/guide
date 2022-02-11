import disnake
from disnake.ext import commands
from disnake.enums import TextInputStyle


class MyModal(disnake.ui.Modal):
    def __init__(self) -> None:
        components = [
            disnake.ui.TextInput(
                label="Name",
                placeholder="Foo Tag",
                custom_id="name",
                style=TextInputStyle.short,
                max_length=50,
            ),
            disnake.ui.TextInput(
                label="Description",
                placeholder="Lorem ipsum dolor sit amet.",
                custom_id="description",
                style=TextInputStyle.paragraph,
            ),
        ]
        super().__init__(title="Create Tag", custom_id="create_tag", components=components)

    async def callback(self, inter: disnake.ModalInteraction) -> None:
        embed = disnake.Embed(title="Tag Creation")
        for key, value in inter.text_values.items():
            embed.add_field(name=key.capitalize(), value=value[:1024], inline=False)
        await inter.response.send_message(embed=embed)


class Modals(commands.Cog):
    def __init__(self, bot: commands.Bot) -> None:
        self.bot = bot

    @commands.slash_command()
    async def create_tag(self, inter: disnake.AppCmdInter) -> None:
        """Sends a Modal to create a tag."""
        await inter.response.send_modal(modal=MyModal())


def setup(bot: commands.Bot) -> None:
    bot.add_cog(Modals(bot))
