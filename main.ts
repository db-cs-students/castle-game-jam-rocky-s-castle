let water: Sprite;
/** 
Title: Ja Morant driving to the basket
Creator: Rocky Jackson
Description: Ja Morant avoids defenders and get to the basket quickly

 */
namespace SpriteKind {
    export const goal = SpriteKind.create()
}

// set up player
scene.setBackgroundImage(img`
    .....ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff.
    ...ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999fffffff
    ..f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f1111111
    .ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff8888888
    .ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff1111111
    .ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999fffffffff
    .ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeef
    ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fb
    fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf1
    9feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feedddddd
    99fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818
    9e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181
    94df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818
    944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181
    9999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff
    9999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff9
    999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999fffffff
    99f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f5555555
    9ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaa
    9ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff5555555
    9ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999fffffffff
    9ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeef
    ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fb
    fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf1
    9feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feedddddd
    99fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5a
    9e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5
    94df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5a
    944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5
    9999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff
    9999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff99999999999ffff9
    999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999ffffffff9999999fffffff
    99f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f11111111f99999f55555555f99999f1111111
    9ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff88888888ff999ffaaaaaaaaff999ff8888888
    9ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff11111111ff999ff55555555ff999ff1111111
    9ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999ffffffffffff999fffffffff
    9ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeeffff999ffffeeeef
    ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fbfeff9ffefbf44fb
    fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf14eef9fee41fddf1
    9feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feeddddddeef999feedddddd
    99fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818ef99999fe5a5a5aef99999fe181818
    9e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181f4e999e4fa5a5a5f4e999e4f818181
    94df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818fd49994df5a5a5afd49994df181818
    944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181f4499944fa5a5a5f4499944f818181
    9999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff999999999ffffff
    9999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff999999999ff99ff
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffff
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff88888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff88888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff88888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffff8888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff88888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff8888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff8888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff88888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f888888888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f8888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111ff888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111111f88888888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111f888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111ff888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111ff88888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111111f888888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111ff888888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111111111111111111f8888888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff11111111111111111111111111111111111111111111111111111111111111111111111111f88888888888888888888888888888888888888888888888888888888
    111111111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111111111ff8888888888ffffffffffffffffffffffffffffffffffffffffffffff
    1111111111111111111111fffffffffff111111111111111111111111111111111111111111111111111111111111111111111ff88888888ff111111f111111ff8888888888888888888888888888888
    1111111111111111111fff88888ff8888fff111111111111111111111111111111111111111111111111111111111111111111f8888888ff11111111f11111111ff88888888888888888888888888888
    111111111111111111f88888888ff8888888f1111111111111111111111111111111111111111111111111111111111111111ff888888f1111111111f1111111111f8888888888888888888888888888
    1111111111111111ff888888888ff88888888ff11111111111111111111111111111111111111111111111111111111111111ff88888f11111111111f11111111111f888888888888888888888888888
    111111111111111f88888888888ff8888888888f1111111111111111111111111111111111111111111111111111111111111ff8888f111111111111f111111111111f88888888888888888888888888
    11111111111111f888888888888ff88888888888f111111111111111111111111111111111111111111111111111111111111ff888f1111111111111f1111111111111f8888888888888888888888888
    1111111111111f8888888888888ff888888888888f11111111111111111111111111111111111111111111111111111111111f888f11111111111111f11111111111111f888888888888888888888888
    1111111111111f8888888888888ff888888888888f1111111111111111111111111111111111111111111111111111111111ff88f111111111111111f111111111111111f88888888888888888888888
    111111111111f88888888888888ff8888888888888f111111111111111111111111111111111111111111111111111111111ff88f111111111111111f111111111111111f88888888888888888888888
    11111111111f888888888888888ff88888888888888f11111111111111111111111111111111111111111111111111111111ff8f1111111111111111f1111111111111111f8888888888888888888888
    11111111111f888888888888888ff88888888888888f11111111111111111111111111111111111111111111111111111111ff8f1111111111111111f1111111111111111f8888888888888888888888
    11111111111f888888888888888ff88888888888888f11111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
    1111111111f8888888888888888ff888888888888888f1111111111111111111111111111111111111111111111111111111fff11111111111111111f11111111111111111f888888888888888888888
`)
let JA = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ....111111..............
    ..111ffff11.............
    .11fffffff11............
    .1f1111111f1............
    .1f8888888f11...........
    .1f1111111ff1..444f444..
    11fffffeeeff1.f444f444f.
    1ff44ebf44e114f444f444f4
    11f4d41fdd11.44f44f44f44
    .11ee4dddd1..444fffff444
    ..1d1818181..fffffffffff
    ..1d8181eeee.444fffff444
    ..111818eeee.44f44f44f44
    ...18181111..4f444f444f4
    ...111f1......f444f444f.
    .....111.......444f444..
`)
JA.setKind(SpriteKind.Player)
JA.ay = 500
// set up controls
controller.moveSprite(JA, 50, 0)
controller.A.onEvent(ControllerButtonEvent.Pressed, function jump() {
    JA.vy = -200
})
scene.cameraFollowSprite(JA)
// set up tile map
scene.setTileMap(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . .
    . . . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . .
    4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . 7 . . . . . . . . 4 4 4 4 .
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`)
scene.setTile(4, img`
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f e e e e e e e e e e e e e e f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, true)
scene.setTile(2, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
`, true)
scene.setTile(7, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
// set up defenders
let Defender = sprites.create(img`
    . . . . . 1 1 1 1 1 1 1 1 1 . .
    . . . . 1 f f f f f f f f f 1 .
    . . . 1 f f f f f f f f f f f 1
    . . . 1 f f f f f f f f f f f 1
    1 1 1 f 5 5 5 5 5 5 5 5 5 5 5 1
    1 e 1 f 5 5 5 5 5 5 5 5 5 5 5 1
    1 e e 1 f f e e e f f f f f f 1
    1 e e 1 f e 4 4 f b e 4 4 e f 1
    . 1 e 1 f e d d f 1 4 d 4 e e 1
    . 1 e f f d e d d d 4 e e e f 1
    . . 1 e d d 5 a 5 a 5 a f f 1 .
    . . . 1 e e a 5 a 5 a 5 f 1 . .
    . . . . 1 f 5 a 5 a 5 a f 1 . .
    . . . . 1 f a 5 a 5 a 5 f 1 . .
    . . . . . 1 f f f f f f 1 . . .
    . . . . . . 1 1 1 1 1 1 1 . . .
`, SpriteKind.Enemy)
tiles.placeOnTile(Defender, tiles.getTileLocation(9, 3))
Defender.setFlag(SpriteFlag.BounceOnWall, true)
Defender.vy = 38
let Defender2 = sprites.create(img`
    . . . . . 1 1 1 1 1 1 1 1 1 . .
    . . . . 1 f f f f f f f f f 1 .
    . . . 1 f f f f f f f f f f f 1
    . . . 1 f f f f f f f f f f f 1
    1 1 1 f 5 5 5 5 5 5 5 5 5 5 5 1
    1 e 1 f 5 5 5 5 5 5 5 5 5 5 5 1
    1 e e 1 f f e e e f f f f f f 1
    1 e e 1 f e 4 4 f b e 4 4 e f 1
    . 1 e 1 f e d d f 1 4 d 4 e e 1
    . 1 e f f d e d d d 4 e e e f 1
    . . 1 e d d 5 a 5 a 5 a f f 1 .
    . . . 1 e e a 5 a 5 a 5 f 1 . .
    . . . . 1 f 5 a 5 a 5 a f 1 . .
    . . . . 1 f a 5 a 5 a 5 f 1 . .
    . . . . . 1 f f f f f f 1 . . .
    . . . . . . 1 1 1 1 1 1 1 . . .
`, SpriteKind.Enemy)
tiles.placeOnTile(Defender2, tiles.getTileLocation(18, 2))
Defender2.setFlag(SpriteFlag.BounceOnWall, true)
Defender2.vy = 38
let Defender3 = sprites.create(img`
    . . . . . 1 1 1 1 1 1 1 1 1 . .
    . . . . 1 f f f f f f f f f 1 .
    . . . 1 f f f f f f f f f f f 1
    . . . 1 f f f f f f f f f f f 1
    1 1 1 f 5 5 5 5 5 5 5 5 5 5 5 1
    1 e 1 f 5 5 5 5 5 5 5 5 5 5 5 1
    1 e e 1 f f e e e f f f f f f 1
    1 e e 1 f e 4 4 f b e 4 4 e f 1
    . 1 e 1 f e d d f 1 4 d 4 e e 1
    . 1 e f f d e d d d 4 e e e f 1
    . . 1 e d d 5 a 5 a 5 a f f 1 .
    . . . 1 e e a 5 a 5 a 5 f 1 . .
    . . . . 1 f 5 a 5 a 5 a f 1 . .
    . . . . 1 f a 5 a 5 a 5 f 1 . .
    . . . . . 1 f f f f f f 1 . . .
    . . . . . . 1 1 1 1 1 1 1 . . .
`, SpriteKind.Enemy)
tiles.placeOnTile(Defender3, tiles.getTileLocation(26, 2))
Defender3.setFlag(SpriteFlag.BounceOnWall, true)
Defender3.vy = 38
// set up water bottles
let water_img = img`
    f f f 1 1 f f f
    f f 9 9 9 9 f f
    f f 9 f f 9 f f
    f f 9 f f 9 f f
    f f 9 f f 9 f f
    f f 9 f f 9 f f
    f f 9 f f 9 f f
    f f 9 9 9 9 f f
`
let water_locations = [tiles.getTileLocation(7, 1), tiles.getTileLocation(16, 2), tiles.getTileLocation(24, 0)]
for (let i = 0; i < water_locations.length; i++) {
    water = sprites.create(water_img, SpriteKind.Food)
    tiles.placeOnTile(water, water_locations[i])
}
// set up water to restet the countdown
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.ashes, 50)
    info.startCountdown(7.5)
})
// set up how to lose
info.startCountdown(7.5)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_loss(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.confetti, 100)
})
info.setLife(2)
function on_miss(sprite: any) {
    game.over(false)
}

scene.onHitTile(SpriteKind.Player, 7, function on_hit_tile(sprite: Sprite) {
    game.over()
})
// set up how to win
let goal_img = img`
    . . . . . . . 1
    . . . . . . . 1
    . 2 2 2 2 2 . 1
    2 . . . . . 2 1
    2 . . . . . 2 1
    2 . . . . . 2 1
    . 2 2 2 2 2 . .
`
let goal = sprites.create(goal_img, SpriteKind.goal)
tiles.placeOnTile(goal, tiles.getTileLocation(31, 4))
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function on_win(other: Sprite, otherSprite: Sprite) {
    game.over(true)
})
// set up how to destroy defenders
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_crossover() {
    timer.throttle("action", 1000, function on_throttle() {
        let projectile2 = sprites.createProjectileFromSprite(img`
        2 2 2 2 1 2 2 2 2 1 2 2 2 2
        2 1 1 1 1 2 1 1 2 1 2 1 1 2
        2 1 1 1 1 2 2 2 1 1 2 1 1 2
        2 2 2 2 1 2 1 1 2 1 2 2 2 2
        1 1 1 1 1 1 1 1 1 1 1 1 1 1
        2 2 2 2 1 2 2 2 2 1 2 2 2 2
        2 2 1 1 1 2 2 1 1 1 2 1 1 2
        1 1 2 2 1 1 1 2 2 1 2 1 1 2
        2 2 2 2 1 2 2 2 2 1 2 2 2 2
        1 1 1 1 1 1 1 1 1 1 1 1 1 1
        2 1 1 2 1 2 2 2 2 1 2 2 2 2
        2 1 1 2 1 2 2 2 2 1 2 1 1 2
        2 1 1 2 1 2 1 1 1 1 2 2 2 1
        1 2 2 1 1 2 2 2 2 1 2 1 1 2
        `, JA, 100, 0)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_broke(other: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.confetti, 100)
})
