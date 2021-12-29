# Threads

Threads are [`Messagable`]({{disnakedocs}}/api.html#messageable) objects, and can be thought of as sub-channels inside
existing channels. They allow organization of multiple topics in a channel by temporarily giving them a separate space.

## Thread-related methods

#### Creating and deleting threads

#### Joining and leaving threads

#### Archiving, unarchiving and locking threads

#### Public and private threads

#### Adding and removing members

## Thread-related events

Threads introduce some new gateway events, which are listed below. You can find more information on these
[in the documentation]({{disnakedocs}}/api.html#disnake.on_thread_join).

-   [`on_thread_join`]({{disnakedocs}}/api.html#disnake.on_thread_join)

-   [`on_thread_remove`]({{disnakedocs}}/api.html#disnake.on_thread_remove)

-   [`on_thread_member_join`]({{disnakedocs}}/api.html#disnake.on_thread_member_join)

-   [`on_thread_member_remove`]({{disnakedocs}}/api.html#disnake.on_thread_member_remove)

-   [`on_thread_delete`]({{disnakedocs}}/api.html#disnake.on_thread_delete)

-   [`on_thread_update`]({{disnakedocs}}/api.html#disnake.on_thread_update)
