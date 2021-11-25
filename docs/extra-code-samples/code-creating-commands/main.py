import disnake
from disnake.ext import commands

import os
from dotenv import load_dotenv

load_dotenv()

bot = commands.Bot(test_guilds=[1234, 5678])


@bot.event
async def on_ready():
    print("The bot is ready!")


@bot.slash_command()
async def ping(inter):
    await inter.response.send_message("Pong!")


@bot.slash_command()
async def server(inter):
    await inter.response.send_message(
        f"Server name: {inter.guild.name}\nTotal members: {inter.guild.member_count}"
    )


@bot.slash_command()
async def user(inter):
    await inter.response.send_message(
        f"Your tag: {inter.author}\nYour ID: {inter.author.id}"
    )


YOUR_BOT_TOKEN = os.environ["YOUR_BOT_TOKEN"]
bot.run(YOUR_BOT_TOKEN)
