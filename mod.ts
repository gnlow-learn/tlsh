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
console.log(tlsh(text1.replace("in sapien", "in sapiex")))
console.log(tlsh(text1.replace("in sapien", "in sapiev")))

console.log(diff(
    text1,
    text1.replace("in sapien", "in saqqqq"),
))
