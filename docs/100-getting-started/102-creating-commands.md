# Creating commands

!!! Note

    This page is a follow-up, and the base code used is from the previous page ([Initial files](./101-initial-files.md)). The code can be found on the GitHub repository [here]({{ guiderepo }}/tree/main/docs/extra-code-samples/intial-files).

Discord also allows developers to register [slash commands]({{ devdocs }}/interactions/application-commands), which provides users a first-class way of interacting directly with your application. These slash commands shall be covered by the guide [here](../200-interactions/202-slash-commands.md), in the **Interactions** section.

## A note on prefix commands

Bot commands that are initiated when a keyword is used along with a specified prefix (such as `!` or `$`) are known as **prefix commands**, and are also often referred to as **text commands**. 

!!! Warning "Message Intent - Privileged"

    It is to be noted that handling prefix commands requires the **message intent**, which allows the bot to get content and data of messages sent by users. This intent has recently been privileged, i.e., it needs to be manually enabled for the bot application, and its requirement will be reviewed if you eventually apply for your bot's verification.

    You can read more about the message intent [here][message-intent-article].

Therefore, to minimize the permissions your bot has to use, we will be convering prefix commands under the **Popular Topics** section, and advancing with the basics of slash commands in this article; more advanced topics will be covered in the [**Interactions**](../200-interactions/202-slash-commands) section.



[message-intent-article]: https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots