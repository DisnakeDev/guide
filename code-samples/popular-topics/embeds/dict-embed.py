import disnake
from disnake.ext import commands

import datetime

bot = commands.Bot(command_prefix="!", test_guilds=[123456789])


@bot.event
async def on_ready():
    print("The bot is ready!")


@bot.command()
async def dictembed(ctx):

    embed_dict = {
        "title": "Embed Title",
        "description": "Embed Description",
        "color": 0xFEE75C,
        "timestamp": datetime.datetime.now().isoformat(),
        "author": {
            "name": "Embed Author",
            "url": "https://disnake.dev/",
            "icon_url": "https://disnake.dev/assets/disnake-logo.png",
        },
        "thumbnail": {"url": "https://disnake.dev/assets/disnake-logo.png"},
        "fields": [
            {"name": "Regular Title", "value": "Regular Value", "inline": "false"},
            {"name": "Inline Title", "value": "Inline Value", "inline": "true"},
            {"name": "Inline Title", "value": "Inline Value", "inline": "true"},
            {"name": "Inline Title", "value": "Inline Value", "inline": "true"},
        ],
        "image": {"url": "https://disnake.dev/assets/disnake-thin-banner.png"},
        "footer": {
            "text": "Embed Footer",
            "icon_url": "https://disnake.dev/assets/disnake-logo.png",
        },
    }

    await ctx.send(embed=disnake.Embed.from_dict(embed_dict))


bot.run("YOUR_BOT_TOKEN")
