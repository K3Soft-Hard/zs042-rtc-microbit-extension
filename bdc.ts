namespace bcd {
    export function Decode(value: number): number {
        return Math.floor(value / 16) * 10 + (value % 16)
    }

    export function Encode(value: number): number {
        return Math.floor(value / 10) * 16 + (value % 10)
    }
}