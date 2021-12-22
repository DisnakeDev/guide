# Creating cogs/extensions

Unless your bot project is a small one, it's a good idea to organize your bot's collection of commands and listeners
into separate classes. [**Cogs**]({{ disnakedocs }}/ext/commands/cogs.html) help you to do just that!

!!! Note

    Cogs are typically used alongside with **Extensions**. You can read more about them [in the documentation]({{ disnakedocs }}/ext/commands/extensions.html).

## Syntax changes

Cogs represent a fairly drastic change in the way you write commands and bots, so here's a list you can come back to for
the primary syntax used in cogs:

-   Each cog is a Python class that subclasses
    [`commands.Cog`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.Cog).
-   Decorators for commands in cogs:
    -   Command - [`commands.command()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.command)
    -   Slash command -
        [`commands.slash_command()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.slash_command)
    -   User command -
        [`commands.user_command()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.user_command)
    -   Message command -
        [`commands.message_command()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.message_command)
-   Every listener is marked with the
    [`commands.Cog.listener()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.Cog.listener) decorator.
-   Cogs are then registered with the
    [`Bot.add_cog()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.Bot.add_cog) call, and are
    subsequently removed with the
    [`Bot.remove_cog()`]({{ disnakedocs }}/ext/commands/api.html#disnake.ext.commands.Bot.remove_cog) call.

<sup>Source: [Disnake Documentation]({{ disnakedocs }}/ext/commands/cogs.html)</sup>

This page will explain in further detail as to how this syntax is used to create and handle cogs.
