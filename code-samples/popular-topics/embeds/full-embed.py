import disnake
from disnake.ext import commands

import datetime

bot = commands.Bot(command_prefix="!", test_guilds=[123456789])


@bot.event
async def on_ready():
    print("The bot is ready!")


@bot.command()
async def fullembed(ctx):

    embed = disnake.Embed(
        title="Embed Title",
        description="Embed Description",
        color=disnake.Colour.yellow(),
        url="https://disnake.dev/",
        timestamp=datetime.datetime.now(),
    )

    embed.set_author(
        name="Embed Author",
        url="https://disnake.dev/",
        icon_url="https://disnake.dev/assets/disnake-logo.png",
    )

    embed.set_thumbnail(url="https://disnake.dev/assets/disnake-logo.png")

    embed.set_image(url="https://disnake.dev/assets/disnake-banner-thin.png")

    embed.add_field(name="Regular Title", value="Regular Value", inline=False)

    embed.add_field(name="Inline Title", value="Inline Value", inline=True)
    embed.add_field(name="Inline Title", value="Inline Value", inline=True)
    embed.add_field(name="Inline Title", value="Inline Value", inline=True)

    embed.set_footer(
        text="Embed Footer",
        icon_url="https://disnake.dev/assets/disnake-logo.png",
    )

    await ctx.send(embed=embed)


bot.run("YOUR_BOT_TOKEN")
