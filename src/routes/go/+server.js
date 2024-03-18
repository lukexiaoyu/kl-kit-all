export function GET({url}){

    console.log(url)
    let a=url.searchParams.get('name')
    return new Response(`Hello, Next.js!,my name is ${a}`)
}