# Responding to interactions

You have only 3 seconds to respond to the interaction.
If do not have time to do it, Discord will shown "This interaction failed" error.

In fact, there are 3 types of interactions:

- [`ApplicationCommandInteraction`]({{ disnakedocs }}/api.html#applicationcommandinteraction) (for [application commands](./202-application-commands))
- [`MessageInteraction`]({{ disnakedocs }}/api.html#messageinteraction) (for [message components](./203-message-components))
- [`Interaction`]({{ disnakedocs }}/api.html#interaction) (a base class, usually not used)

But responding is the same for both interactions types.

### `interaction.response`

[`response`]({{ disnakedocs }}/api.html#disnake.Interaction.response) attribute returns a [`InteractionResponse`]({{ disnakedocs }}/api.html#disnake.InteractionResponse) instance that has 4 usable methods.
A response can **only be done once**. If you want to send secondary messages, consider using [`followup`]({{ disnakedocs }}//api.html#disnake.Interaction.followup) webhook instead.

1. [`send_message`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.send_message) - Sends response message
2. [`edit_message`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.edit_message) - Edits original message, you're unable to use this in application command because there are no message while you responding
3. [`defer`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.defer) - Defers the interaction
4. [`is_done`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.is_done) - Indicates whether an interaction response has been done before

!!! Note
    [`defer`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.defer) works differently depending on the type of interaction.
    It creates *"Bot is thinking..."* message for application commands and
    doesn't throw *"This interaction failed"* if you're not going to respond to message components.

!!! Note
    If you're going to run long processes (more than 3 seconds) while responding, you must first defer the interaction.
    Then when your response is ready you can edit the message using [`edit_original_message`](#interactioneditdelete_original_message) method

``` python
@bot.slash_command()
async def ping(inter: ApplicationCommandInteraction):
    await inter.response.send_message("Pong!")


@bot.slash_command()
async def defer(inter: ApplicationCommandInteraction):
    await inter.response.defer()
    await asyncio.sleep(10)
    await inter.edit_original_message("The wait is over, my comrades!")
```

### `interaction.followup`

[`followup`]({{ disnakedocs }}/api.html#disnake.Interaction.followup) returns Webhook what associated with your response. Often used when you need to send secondary messages after responding.

!!! Tip Inline End

    Refer to the [Webhook]({{ disnakedocs }}/api.html#disnake.Webhook) documentation for a list of all the available methods.

``` python
@bot.slash_command()
async def followup(inter: ApplicationCommandInteraction):
    await inter.response.send_message("First response message!")

    # If wait is True then Webhook.send returns the message that was sent, otherwise None.
    msg = await inter.followup.send("The message will self-destruct after 3 seconds", wait=True)
    await msg.delete(delay=3)
```

### `interaction.original_message`

[`original_message`]({{ disnakedocs }}/api.html#disnake.Interaction.original_message) coroutine fetches the response message that associated with the interaction. Return can be different depending on that response type was made before.

| Response Type                                                                           | Original message                                                                       |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`send_message()`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.send_message) | The message you sent                                                                   |
| [`edit_message()`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.edit_message) | The message you edited                                                                 |
| [`defer()`]({{ disnakedocs }}/api.html#disnake.InteractionResponse.defer)               | The message with thinking state or the message that message component is associated to |
| Any other                                                                               | `None`                                                                                 |

This returns [`InteractionMessage`]({{ disnakedocs }}/api.html#disnake.InteractionMessage) that inherits from ordinary [`Message`]({{ disnakedocs }}/api.html#disnake.Message) with changes to `edit()` and `delete()` to work.

### `interaction.[edit|delete]_original_message`

This two coroutines works the similar way as [`InteractionMessage.[edit|delete]()`](#interactionoriginal_message). The difference is that these coroutines do not fetch original message and save 1 HTTP request.

## Ephemerality
