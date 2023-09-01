import React from "react";

import CommetsList from "./CommetsList";


const commentData = [
    {
        name:"maha",
        text: "Lorem10bvhzdvjb",
        replies:[
            {
                name:"maha",
                text: "Lorem10bvhzdvjb",
                replies:[
                    {
                        name:"maha",
                        text: "Lorem10bvhzdvjb",
                        replies:[
                
                        ]
                    }
        
                ]
            }

        ]
    },
    {
        name:"maha",
        text: "Lorem10bvhzdvjb",
        replies:[
            {
                name:"maha",
                text: "Lorem10bvhzdvjb",
                replies:[
        
                ]
            }

        ]
    },
    {
        name:"maha",
        text: "Lorem10bvhzdvjb",
        replies:[
            {
                name:"maha",
                text: "Lorem10bvhzdvjb",
                replies:[
                    {
                        name:"maha",
                        text: "Lorem10bvhzdvjb",
                        replies:[
                            {
                                name:"maha",
                                text: "Lorem10bvhzdvjb",
                                replies:[
                                    {
                                        name:"maha",
                                        text: "Lorem10bvhzdvjb",
                                        replies:[
                                            {
                                                name:"maha",
                                                text: "Lorem10bvhzdvjb",
                                                replies:[
                                                    {
                                                        name:"maha",
                                                        text: "Lorem10bvhzdvjb",
                                                        replies:[
                                                
                                                        ]
                                                    }
                                        
                                                ]
                                            }
                                
                                        ]
                                    }
                        
                                ]
                            }
                
                        ]
                    },
        
                ]
            }

        ]
    },
    {
        name:"maha",
        text: "Lorem10bvhzdvjb",
        replies:[
            {
                name:"maha",
                text: "Lorem10bvhzdvjb",
                replies:[
        
                ]
            }

        ]
    },

]

const CommentsContainer = () => {


  return (
    <div className=" m-5 p-5">
      <h1 className="text-2xl font-bold">Commants:</h1>
      <CommetsList comments={commentData}/>
    </div>
  );
};

export default CommentsContainer;
