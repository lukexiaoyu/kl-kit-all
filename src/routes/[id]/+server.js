export function GET({url,params}){
    console.log(params)
    return new Response(`Hello, Next.js!,it is ${params.id}`)
}