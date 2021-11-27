# What are interactions?

An **Interaction** is the message that your bot receives when a user initiates an application command or a message component.

## Interactions and Bot Users

We're all used to the way that Discord bots have worked for a long time.
You make an application in [Developer Portal]({{ devportal }}), make a new bot user, and copy the token. Interactions bring something entirely new - the ability to interact with an application *without needing a bot user in the guild*. Responding to the interaction doesn't require a bot token.

`disnake` is primarily focused on using the gateway events, so you still need a bot user.
Check out [`hikari-py`](https://github.com/hikari-py/hikari) with their REST-API part for this purpose.

Welcome to the new world.

