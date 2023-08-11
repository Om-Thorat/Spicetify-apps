export function normalizeLoudness(decibels: number): number {
    let a = Math.pow(10, decibels / 20);
    if (a>1){
        return (1+a/(1+Math.abs(a))*0.5)
    }
    else{
        return a-0.5
    }
}