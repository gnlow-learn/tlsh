import { Tlsh } from "https://esm.sh/tlsh_ts@0.1.2"

const tlsh =
(str: Uint8Array | string) => {
    const hasher = new Tlsh()
    hasher.finale(str)
    return hasher.hash()
}

const diff =
(...[a, b]: (Uint8Array | string)[]) => {
    const a0 = new Tlsh()
    const b0 = new Tlsh()
    a0.finale(a)
    b0.finale(b)
    return a0.totalDiff(b0)
}

const text1 = await Deno.readTextFile("./lorem.txt")

console.log(tlsh(text1))
// 1E5179716D8E03200AE3117573CAC87DF298E16416C367A5ECF7761DB14B50CA3232E9

console.log(tlsh(text1.replace("in sapien", "in sapiex")))
// 115179716D8E03200AE3117573CAC87DF298E16416C367A5ECF7761DB14B50CA3232E9

console.log(tlsh(text1.replace("Lorem", "Orem")))
// E25179716D8E03200AE3117573CAC87DF298E16416C367A5ECF7761DB14B50CA3232E9

console.log(tlsh(text1.replaceAll("e", "i")))
// 1E5110756CCD06251FE112BAA2999C7EE7C4A0F427C31789FCF3831AB61A618D32247C

console.log(diff(
    text1,
    text1.replace("in sapien", "in saqqqq"),
))
