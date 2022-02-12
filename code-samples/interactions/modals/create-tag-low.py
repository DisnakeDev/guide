import disnake
from disnake.ext import commands
from disnake.enums import TextInputStyle


bot = commands.Bot()


@bot.slash_command()
async def tags_low(inter: disnake.AppCmdInter):
    """Sends a Modal to create a tag but with a low-level implementation."""
    await inter.response.send_modal(
        title="Create Tag",
        custom_id="create_tag_low",
        components=[
            disnake.ui.TextInput(
                label="Name",
                placeholder="Bar Tag",
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
        ],
    )

    modal_inter: disnake.ModalInteraction = await self.bot.wait_for(
        "modal_submit",
        check=lambda i: i.custom_id == "create_tag_low" and i.author.id == inter.author.id,
        timeout=300,
    )

    embed = disnake.Embed(title="Tag Creation")
    for key, value in modal_inter.text_values.items():
        embed.add_field(name=key.capitalize(), value=value[:1024], inline=False)
    await modal_inter.response.send_message(embed=embed)


bot.run("YOUR_BOT_TOKEN")
