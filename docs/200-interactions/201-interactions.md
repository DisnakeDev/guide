# What are interactions?

An **[Interaction]({{ disnakedocs }}/api.html#interaction)** is the message that your bot receives when a user uses application command or a message component.

## Interaction types

For Application commands (i.e. slash commands, user and message context menus) it's **[ApplicationCommandInteraction]({{ disnakedocs }}/api.html#applicationcommandinteraction)**.
For Message components (i.e. button and select menu) it's **[MessageInteraction]({{ disnakedocs }}/api.html#messageinteraction)**.

# Interactions and Bot users

We're all used to the way that Discord bots have worked for a long time. You make an application in [Dev Portal]({{ devportal }}), add bot user to it, and copy the token.
Interaction bring something entirely new: the ability to interact with an application *without needing a bot user in the guild*. Responding doesn't require a bot token.

`disnake` fully focused on using the gateway events, so you still need a bot user.
Check out `[hikari-py](https://github.com/hikari-py/hikari)` with their REST-API part for this purposes.

Welcome to the new world.

