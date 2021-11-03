# Creating Your Application

The steps mentioned further in this markdown are essentially a copy of the steps [mentioned in the docs](https://disnake.readthedocs.io/en/stable/discord.html). Therefore, you can follow the steps from either resource.

!!! Note
    If you have already made your bot application, you can skip this document and move on to [`basics`](./index.md).

## Creating a Bot Account

In order to work with the library and the Discord API in general, we must first create a Discord Bot account.

Creating a Bot account is a pretty straightforward process.

1. Make sure you're logged on to the Discord website.
2. Navigate to the application page
3. Click on the `New Application` button.
4. Give the application a name and click `Create`.
5. Create a Bot User by navigating to the `Bot` tab and clicking `Add Bot`.
    - Click `Yes, do it!` to continue.
6. Make sure that Public Bot is ticked if you want others to invite your bot.
    - You should also make sure that Require OAuth2 Code Grant is unchecked unless you are developing a service that needs it. If you’re unsure, then leave it unchecked.
7. Copy the token using the `Copy` button.
    - !!! Warning

        This is not the Client Secret at the General Information page.

And that’s it. You now have a bot account and you can login with that token.

## Inviting Your Bot
So you've made a Bot User but it's not actually in any server.

If you want to invite your bot you must create an invite URL for it.

1. Make sure you're logged on to the Discord website.
2. Navigate to the application page
3. Click on your bot's page.
4. Go to the "OAuth2" tab.
5. Tick the "bot" and "application.commands" checkboxes under "scopes".

!!! Note
    The person adding the bot needs "Manage Server" permissions to do so.
    If you want to generate this URL dynamically at run-time inside your bot and using the `disnake.Permissions` interface, you can use `disnake.utils.oauth_url`.
