# Slash commands

WIP

## Example

This is an example of a full-fledged command taking advantage of a large amount of various features. Take this as a neat teaser for what's to come.

The annotations and docstrings matter

```py
@commands.guild_permissions(808030843078836254, roles={891619545356308481: True})
@commands.slash_command(default_permissions=False)
async def transfer(
    self,
    inter: disnake.ApplicationCommandInteraction,
    target: disnake.Member,
    item: str,
    amount: int = commands.Param(10, gt=0, le=100),
    source: disnake.Member = commands.Param(lambda inter: inter.author),
    reason: str = "",
):
    """Transfer an item from an inventory of a member to an inventory of another member

    Parameters
    ----------
    target: The member which will recieve the item
    item: The item to transfer
    amount: The amount of items to transfer
    source: The member from which to take to item
    reason: The reason for this transfer
    """
    await inter.response.send_message(
        f"Transfered {amount}x {item} from {source.mention} to {target.mention}"
    )
    if reason:
        await inter.followup.send(reason)


@transfer.autocomplete("item")
async def autocomplete_item(
    self,
    inter: disnake.ApplicationCommandInteraction,
    option: str,
    *,
    target: disnake.Member = None,
    **kwargs: Any,
):
    if target is None:
        return {}

    return {item["name"]: item["id"] for item in get_db_items(target.id)}
```
