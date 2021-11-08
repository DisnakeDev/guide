# Good Practices

Here's a list of some good practices in disnake.

## Running code when a cog is loaded

Most people are used to running everything in `__init__` but that doesn't allow running async code. In this case you can overwrite the special `cog_load` method. 

```py
class MyCog(commands.Cog):
    def __init__(self, bot: commands.Bot):
        self.bot = bpt

    async def cog_load(self):
        self.data = await bot.fetch_database_data()

    @commands.slash_command()
    async def command(
        self, 
        interaction: disnake.ApplicationCommandInteraction,
        user: disnake.User
    ):
        await interaction.response.send_message(self.data[user.id])
```

## Attaching a file to an embed

Using explicit `attachment://` used to be the only way to attach a local file to an embed. Disnake abstracts this with `file=` kwargs.

```py
# discord.py:
embed = discord.Embed(title="An embed with an image")
embed.set_image(url="attachment://image.png")
file = disnake.File("assets/image.png")

await channel.send(embed=embed, file=file)
```
```py
# disnake:
embed = discord.Embed(title="An embed with an image")
file = disnake.File("assets/image.png")
embed.set_image(file=file)

await channel.send(embed=embed, file=file)
```

## Converting arguments in commands

discord.py used to have `Converter` classes to convert arguments if they are provided. The idea of converters are very good however the implementation is incredebly shitty and in disnake they are deprecated. This is because when you annotate an argument you're hinting its type. However an argument will never actually be an instance of the converter class. Its usage also makes it absolutely impossible to use typecheckers.

Disnake aims to eliminate this issue by only allowing conversion of builtin types like `disnake.Member`, `disnake.Emoji`, etc. If you ever want to have your own converter you have to use the `converter` argument in `Param`

```py
# discord.py
class DataConverter(commands.Converter):
    async def convert(self, ctx: commands.Context, arg: str):
        parts = arg.split(",")
        return {"a": parts[0], "b": int(parts[1]), "c": parts[2].lower()}


@commands.command()
async def command(
    ctx: commands.Context,
    data: DataConverter
):
    ...
```
```py
# disnake
async def convert_data(inter: disnake.ApplicationCommandInteraction, arg: str):
    parts = arg.split(",")
    return {"a": parts[0], "b": int(parts[1]), "c": parts[2].lower()}


@commands.slash_command()
async def command(
    inter: disnake.ApplicationCommandInteraction,
    data: Dict[str, Any] = commands.Param(converter=convert_data)
):
    ...
```

If you absolutely want to be able to use classes you may pass in a class method
```py
class Data:
    def __init__(self, a: str, b: int, c: str):
        self.a = a
        self.b = b
        self.c = c

    @classmethod
    async def from_option(cls, inter: disnake.ApplicationCommandInteraction, arg: str)
        parts = arg.split(",")
        return cls(a=parts[0], b=int(parts[1]), c=parts[2].lower())

@commands.slash_command()
async def command(
    inter: disnake.ApplicationCommandInteraction,
    data: Data = commands.Param(converter=Data.from_option)
):
    ...
```

## The target of context commands

Instead of using `inter.target` you should be using a parameter of your command.

```py
@commands.user_command()
async def command(
    inter: disnake.ApplicationCommandInteraction,
    user: disnake.User
):
    await inter.response.send_message(f"Used on {user.mention}")
```

## Adding descriptions to slash commands

You may use docstrings for command and option descriptions. Everything before `Parameters` is the command description. Everything after `Parameters` are the option descriptions.

```py
@commands.slash_command()
async def command(
    inter: disnake.ApplicationCommandInteraction,
    category: str,
    item: str,
    details: bool,
):
    """Show item info

    Parameters
    ----------
    category: The category to search
    item: The item to display
    details: Whether to get the details of this time
    """
```
