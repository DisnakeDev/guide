import disnake
from disnake.ext import commands

import os
from dotenv import load_dotenv

load_dotenv()

bot = commands.Bot()


@bot.event
async def on_ready():
    print("The bot is ready!")


YOUR_BOT_TOKEN = os.environ["YOUR_BOT_TOKEN"]
bot.run("YOUR_BOT_TOKEN")
