import React from 'react'
import axios from 'axios'
class Articles extends React.Component{
    constructor(){
        super()
        this.state={
            pageNo:0,
            articles:{},
            data:[],
            totalPage:[1,2,3,4,5]
        }
    }
    handleClick=(e)=>{
        const pageNo=e
        this.setState({pageNo})
        axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${this.state.pageNo}`)
        .then(response=>{
            const articles=response.data
            const data=articles['data']
            this.setState({articles,data})
        })
        .catch((err)=>console.log(err))
    }
    render(){       
        return(
            <div>
                <h1>Articles Title</h1>
                <ul>
                    {
                        this.state.data.map((ele,i)=>{
                            if(ele.title!=null && ele.title!=''){
                                return(
                                    <li key={i}>{ele.title}</li>
                                )
                            }
                        })
                    }
                </ul>
                <h1>Article Pages</h1>
                {
                    this.state.totalPage.map((item,i)=>{
                        return(
                            <button key={i} onClick={()=>{this.handleClick(item)}}>{item}</button>
                        )
                    })
                }
            </div>
        )
    }
}
export default Articles