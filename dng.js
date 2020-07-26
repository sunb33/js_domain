
let pronoun = ["the","our","their"];
let adj = ["good", "great", "amazing","bad"];
let noum = ["raccoon","doggy","cat", "penguin"];
let domain =[".com",".us",".ve"];


for (let pron of pronoun){
        for (let adjj of adj){
   
            for (let nou of noum){
    
                for (let doma of domain){
                      console.log(pron + adjj + nou + doma);
                }

            }

        
        } 

}









/* *
function generation()
{
    let pron= Math.floor(Math.random()*pronoun.length);
    let adjj= Math.floor(Math.random()*adj.length);
    let nou= Math.floor(Math.random()*noum.length);
    let doma= Math.floor(Math.random()*domain.length);    
    return (pronoun[pron]+ ' ' +adj[adjj]+ ' ' +noum[nou]+ ' ' +domain[doma]);
}
console.log(generation());
/**/ 
