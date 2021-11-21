import disnake
from disnake.ext import commands

bot = commands.Bot()


@bot.event
async def on_ready():
    print("The bot is ready!")


bot.run("YOUR_BOT_TOKEN")
