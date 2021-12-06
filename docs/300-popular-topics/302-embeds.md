# Embeds

You might have seen some special messages on Discord (often sent by bots/webhooks), that have a colored border, embedded images, text fields and other properties. These elements are referred to as **Embeds**, and this section will cover how you can create and send one with your bot. This is done with the [`disnake.Embed()`]({{ disnakedocs }}/api.html?highlight=embed#embed)

This section will extensively cover the attributes and methods used with embeds. Thus, we recommend skipping to your desired topic via the table of contents.

## Embed preview

Here is an example of how an embed may look. We will go over embed construction in the next part of this article.

![](../assets/img-embeds/001.png){ width="70%" }

The code for this embed is given below.

``` python linenums="1" title="embed.py"
# At the top of the file.
import disnake
from disnake.ext import commands

# Inside a command, event listener, etc.
embed = disnake.Embed(
    title="Embed Title",
    description="Embed Description",
    color=disnake.Colour.yellow(),
    timestamp=datetime.datetime.now(),
)

embed.set_author(
    name="Embed Author",
    url="https://disnake.dev/",
    icon_url="https://disnake.dev/assets/disnake-logo.png",
)
embed.set_footer(
    text="Embed Footer",
    icon_url="https://disnake.dev/assets/disnake-logo.png",
)

embed.set_thumbnail(url="https://disnake.dev/assets/disnake-logo.png")
embed.set_image(url="https://disnake.dev/assets/disnake-thin-banner.png")

embed.add_field(name="Regular Title", value="Regular Value", inline=False)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)

await ctx.send(embed=embed)
```

!!! Note

    It is not strictly necessary to use all elements showcased above. You're free to leave some out as per your requirements.

The colour of the embed (via the `colour` parameter) accepts a [`disnake.Colour`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Colour) instance, a HEX string or an integer.

To add a blank field to the embed, you can use `embed.add_field(name='\u200b', value='\u200b')`.

## Creating an embed

You can use the [`Embed`]({{ disnakedocs }}/api.html?highlight=embed#embed) instance for the creation and manipulation of embeds.

```python linenums="1" title="embed.py"
embed = disnake.Embed(
    title="An Embed!",
    description="A description!",
    colour=0xF0C43F,
)
```

![](../assets/img-embeds/002.png){ width="33%" }

### Setting the author

You can set the author of the embed with the [`set_author`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.set_footer) attribute. Note that this code will come after you have defined `embed` via `embed = disnake.Embed(...)`.

```python linenums="1" title="embed.py"
embed.set_author(
    name="Embed Author",
    url="https://disnake.dev/",
    icon_url="https://disnake.dev/assets/disnake-logo.png",
)
```

![](../assets/img-embeds/003.png){ width="34%" }

Since we have set a URL in this case, clicking on "Embed Author" will redirect the user to the [`disnake.dev`](https://disnake.dev/) website.

### Setting the footer

You can set the footer of the embed with the [`set_footer`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.set_footer) attribute. Note that this code will come after you have defined `embed` via `embed = disnake.Embed(...)`.

```python linenums="1" title="embed.py"
embed.set_footer(
    text="Embed Footer",
    icon_url="https://disnake.dev/assets/disnake-logo.png",
)
```

![](../assets/img-embeds/004.png){ width="33%" }

### Setting the thumbnail

The thumbnail of the embed is shown in it's top right corner. It can be set using the [`set_thumbnail`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.set_thumbnail) attribute.

```python linenums="1" title="embed.py"
embed.set_thumbnail(url="https://disnake.dev/assets/disnake-thin-banner.png")
```

![](../assets/img-embeds/005.png){ width="74%" }

### Using timestamps

Timestamps are shown in the footer of the embed, indicating the time at which the embed was sent/initiated. This can be done using the [`timestamp`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.timestamp) parameter of `disnake.Embed()`. Note that you will need to install and import the [`datetime`][datetime-pypi] package into your script.

```python linenums="1" title="embed.py" hl_lines="9"
# At the top of your script
import datetime

# Inside a command, event listener, etc.
embed = disnake.Embed(
    title="An Embed!",
    description="A description!",
    colour=0xF0C43F,
    timestamp=datetime.datetime.now(),
)
```

![](../assets/img-embeds/006.png){ width="74%" }

### Inserting fields

Embed fields have two parameters - a name(or title) and a value, inside the [`add_field`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.add_field) attribute. It is also possible to use markdown in both parameters.

```python linenums="1" title="embed.py"
# Regular Fields
embed.add_field(name="Regular Title", value="Regular Value", inline=False)

# Inline Fields
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
```

![](../assets/img-embeds/007.png){ width="55%" }

These attributes also fully support the use of markdown, as well as highlight links. You can also insert fields at a particular position, with a specified index using [`embed.insert_field_at(index, ...)`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.insert_field_at).

### Inserting images

This can be done using the [`set_image`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.set_image) attribute, which accepts either a URL or a [`disnake.File()`]({{ disnakedocs }}/api.html?highlight=embed#file) object.

```python linenums="1" title="embed.py"
# Using a URL
embed.set_image(url="https://disnake.dev/assets/disnake-thin-banner.png")

# Using a local file
embed.set_image(file=disnake.File("path/to/file.png"))
```

![](../assets/img-embeds/008.png){ width="72%" }

## Sending an embed

Once the embed is created, you need to send it to a channel too. This means you need to call `send(embed=embed)` on a messageable object, for example a `TextChannel` object (i.e. `message.channel.send`) or a `Context` object (`ctx.send`). Otherwise, the embed will not be sent.

## Dictionaries to embeds

A `dict` datatype (and essentially a `json` file) can be converted into an embed, using the [`Embed.from_dict()`]({{ disnakedocs }}/api.html?highlight=embed#disnake.Embed.from_dict) method. We can recreate the embed made at the start of this page, using the same.

```python linenums="1" title="embed.py"
embed_dict = {
    "title": "Embed Title",
    "description": "Embed Description",
    "color": 0xFEE75C,
    "timestamp": datetime.datetime.now().isoformat(),
    "author": {
        "name": "Embed Author",
        "url": "https://disnake.dev/",
        "icon_url": "https://disnake.dev/assets/disnake-logo.png",
    },
    "thumbnail": {"url": "https://disnake.dev/assets/disnake-logo.png"},
    "fields": [
        {"name": "Regular Title", "value": "Regular Value", "inline": "false"},
        {"name": "Inline Title", "value": "Inline Value", "inline": "true"},
        {"name": "Inline Title", "value": "Inline Value", "inline": "true"},
        {"name": "Inline Title", "value": "Inline Value", "inline": "true"},
    ],
    "image": {"url": "https://disnake.dev/assets/disnake-thin-banner.png"},
    "footer": {"text": "Embed Footer", "icon_url": "https://disnake.dev/assets/disnake-logo.png"},
}

await channel.send(embed=disnake.Embed.from_dict(embed_dict))
```

This will give the exact same result as the embed shown [here](./#embed-preview). Note that the timestamp passed through a dictionary should be in ISO8601 format (which has been achieved here by using `datetime.datetime.now().isoformat()`). You can learn more about the `dict` format of embeds in the [official Discord documentation]({{ devdocs }}/resources/channel#embed-object).

## Embed notes

- To display fields side-by-side, you need at least two consecutive fields set to inline.
- The timestamp will automatically adjust the timezone depending on the user's device.
- Mentions of any kind in embeds will only render correctly within embed descriptions and field values.
- Mentions in embeds will not trigger a notification.
- Embeds allow masked links (e.g. `[Guide](https://guide.disnake.dev/ 'optional hovertext'`)), but only in description and field values.

<sup>Source: [Discord.js Guide](https://discordjs.guide/popular-topics/embeds.html#notes)</sup>

## Embed limits

There are a few limits to be aware of while planning your embeds due to the API's limitations. Here is a quick reference you can come back to:

- Embed titles are limited to 256 characters.
- Embed descriptions are limited to 4096 characters.
- There can be up to 25 fields.
- A field's name is limited to 256 characters and its value to 1024 characters.
- The footer text is limited to 2048 characters.
- The author name is limited to 256 characters.
- The sum of all characters from all embed structures in a message must not exceed 6000 characters.
- Ten embeds can be sent per message.

<sup>Source: [Discord API Documentation]({{ devdocs }}/resources/channel#embed-limits)</sup>

## Resulting code

The code for the full embeds showcased in this section (using `set` methods and the `from_dict` method) can be found on the GitHub repository [here]({{ guiderepo }}/tree/main/docs/extra-code-samples/code-embeds).



[datetime-pypi]: https://pypi.org/project/DateTime/