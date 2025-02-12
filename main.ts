let index = 0
let center = positions.add(
player.position(),
pos(-30, 0, 0)
)
player.say("¡Alerta! Terremoto en Minecraft.")
loops.pause(1000)
mobs.teleportToPosition(
mobs.target(ALL_ENTITIES),
pos(0, 0, 0)
)
while (index <= 100) {
    center = positions.add(
    center,
    pos(1, 0, Math.randomRange(0, 2))
    )
    blocks.fill(
    AIR,
    positions.add(
    center,
    pos(0, 0, -1)
    ),
    positions.add(
    center,
    pos(0, -4, 1)
    ),
    FillOperation.Replace
    )
    blocks.place(LAVA, positions.add(
    center,
    pos(0, -3, 0)
    ))
    index += 1
}
