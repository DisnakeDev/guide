# Discord.py to Disnake

In this guide we will try to explain the differences between discord.py and disnake, and ways to rewrite your code to disnake.

# Differences

As you probably know, discord.py has been discontinued, and because of that, disnake developers and contributors committed to keep the Discord API wrapper for Python alive.

In this table we will show you some differences between discord.py and disnake:

| Features       | Disnake            | Discord.py           |
| -------------- | ------------------ | -------------------  |
| Slash commands | :white_check_mark: | :x:                  |
| Components     | :white_check_mark: | :white_check_mark: * |
| Context menus  | :white_check_mark: | :x:                  |

<sup>\* Only in version 2.0.</sup>

discord.py 2.0 had major changes, and that's why if you are not using that version, we recommend you to read [this page]({{ breakingchanges }}) which collected all the major changes that version had.

# Rewrite

If you want to rewrite your code from discord.py to disnake, this will require some not so difficult changes.

Here are three ways to rewrite your code.

### Requirements 

Before we start, you must uninstall `discord` library, you can do it with the following command:

=== "Windows"

    ```
    py -3 -m pip uninstall discord
    ```

=== "macOS"

    ```
    python3 -m pip uninstall discord
    ```

=== "Linux"

    ```
    python3 -m pip uninstall discord
    ```

<sup>We do this to prevent conflicts with the `disnake` library.</sup>

Also don't forget to install disnake, you can follow [this guide](000-prerequisites/001-installing-python.md#installing-disnake) to install it.

Once you have those two requirements ready, let's continue with the three ways to rewrite your code from discord.py to disnake:

1. Replace every `discord` to `disnake`:

    * First of all, import disnake into your code:

        ```py
        import disnake
        from disnake.ext import commands
        ```

        Don't forget to delete the lines where you import `discord`.

    * Then with your favorite editor, replace every `discord` you have in your code with `disnake`.

        !!! info "Note"
            Please, if you have problems with your code after doing this way, try to read [this page]({{ breakingchanges }}) which has a list of major changes or ask us on our [Discord server]({{ disnakeserver }}).

2. Import disnake as discord:

    * Import disnake as discord into your code:

        ```py
        import disnake as discord
        from disnake.ext import commands
        ```

        Don't forget to delete the lines where you import `discord`.

        !!! info "Note"
            Please, if you have problems with your code after doing this way, try to read [this page]({{ breakingchanges }}) which has a list of major changes or ask us on our [Discord server]({{ disnakeserver }}).

3. Use discord shim:

    * First of all, you must install the discord shim, you can do it with the following command:

        === "Windows"

            ```
            py -3 -m pip install disnake[discord]
            ```

        === "macOS"

            ```
            python3 -m pip install disnake[discord]
            ```

        === "Linux"

            ```
            python3 -m pip install disnake[discord]
            ```

    * Then, import the discord shim:

        ```py
        import discord
        from discord.ext import commands
        ```

        The discord shim allows us to use `disnake` without the need to import it directly, nor import it as `discord`.

        !!! warning
            We don't recommend using the shim, please prefer to use one of the two ways already mentioned.

And that's it! Since disnake is a fork of discord.py, it has a lot of similarities, but we recommend you to always run your code to fix possible bugs.
