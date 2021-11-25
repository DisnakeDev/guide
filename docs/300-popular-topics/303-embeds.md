# Embeds

You might have seen some special messages on Discord (often sent by bots/webhooks), that have a colored border, embedded images, text fields and other properties. These elements are referred to as **Embeds**, and this section will cover how you can create and send one with your bot.

## Embed preview

Here is an example of how an embed may look. We will go over embed construction in the next part of this article.

<br>
    <p align = "left">
        ![](../assets/img-embeds/001.png){ width="70%" }
    </p>
<br>

The code for this embed is given below.

``` python linenums="1" title="main.py"
# At the top of the file.
import disnake
from disnake.ext import commands

# Inside a command, event listener, etc.
embed = disnake.Embed(
    title="Embed Title",
    description="Embed Description",
    color=0xF0C43F,
    timestamp=datetime.datetime.now(),
)

embed.set_author(
    name="Embed Author",
    url="https://disnake.dev/",
    icon_url="https://i.imgur.com/udpCmI3.png",
)
embed.set_footer(text="Embed Footer", icon_url="https://i.imgur.com/udpCmI3.png")

embed.set_thumbnail(url="https://i.imgur.com/udpCmI3.png")
embed.set_image(url="https://i.imgur.com/KsTvw5Z.png")

embed.add_field(name="Regular Title", value="Regular Value", inline=False)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)
embed.add_field(name="Inline Title", value="Inline Value", inline=True)

await channel.send(embed=embed)
```

!!! Tip

    You don't need to include all the elements showcased above. If you want a simpler embed, leave some out.

To add a blank field to the embed, you can use `embed.add_field(name='\u200b', value='\u200b')`.