#My commands do not run on the server

If the commands on your server do not run, there are various reasons for why this is, please make sure the following points are checked:

**1. Make sure that you do not put a slash before the command;**  
The command `/say test` has to be set like `say test`.

**2. Make sure that the plugin is loaded correctly;**  
Make sure that the plugin works, try to run /craftingstore (/csb on bugneecord) to see if the plugin responds.

**3. Check the console;**  
The plugin will give information about its status, it will tell you in the console (when it starts) if it worked as expected and if the server key is valid.

**4. Make sure that you have confirmed the API key;**  
Every server needs to communicate using our API, you can get the key from \[ CraftingStore Dashboard -&gt; Servers \].

**5. Make sure that every server has its own API key;**  
When two servers use the same key, they will both fail to work. If you run a BungeeCord network, every server needs it's own key as well.

**6. Make sure the commands can actually run in the console;**  
Some commands will not run in the console, this includes commands that are not "real", like commands from MyCommand. These will not work with CraftingStore.

**7. Create a support ticket if the issues are still there;**  
To make the process as fast as possible, we'll need some information.   
\- Enable debug mode ([more info on that here!](/plugin-help/how-to-enable-debug-mode))  
\- Share all messages that start with \[CraftingStore\] using a service like hastebin.com (share the link)  
\- Share the exact server version; Spigot 1.15.x build x  
\- Share the java version of your server  
\- Share any steps you took to install the plugin, so we can figure out what went wrong.  
  
Debugging issues with commands can be hard, we have no easy way of telling you what went wrong, we'll need to figure it out with you. Every server set-up is different, so please be as as complete as possible.