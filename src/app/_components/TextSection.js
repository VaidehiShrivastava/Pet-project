
export function BulletPoints({bullets}) {
    return (
        <div >
  

            {bullets.map((item,index)=>
            <div key={index}>
               • <p className="text-white ">{item}</p>
            </div>
            )}
            
        </div>
    );
}