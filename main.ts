player.onTellCommand("Help", function () {
    player.tell(mobs.target(LOCAL_PLAYER), "Signal Client - v.1 Commands")
    player.tell(mobs.target(LOCAL_PLAYER), "<1- Help> List All Commands")
    player.tell(mobs.target(LOCAL_PLAYER), "<2- Atp> Agent Teleport")
})
player.tell(mobs.target(LOCAL_PLAYER), "Signal Client - v.1 Starting...")
loops.pause(1000)
player.tell(mobs.target(LOCAL_PLAYER), "Signal Client - v.1 Initialized>>>")
