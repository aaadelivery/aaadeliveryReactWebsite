import JsxParser from 'react-jsx-parser';
import {Link} from 'react-router-dom';
import CircleMapPath from "./circle-animated-path-map";
import Grid from '@mui/material/Grid';

var MarkdownIt = require('markdown-it');

function markDownBold(str){
    const regexp = /\*\*(.*?)\*\*/gm;
    const boldList = [...str.matchAll(regexp)].map(x => x);
    const replaceWith = boldList.map(x => "<bold className='bold-inline'>"+(x[1]).replace(/\*\*>/g , "")+"</bold>");
    
    console.log(replaceWith);
    console.log(boldList);
    var boldenedText = str;
    for(var index in boldList){
        boldenedText = boldenedText.replace(boldList[index][0] ,replaceWith[index]);
        console.log(boldenedText);
    }

    return boldenedText;
}

function markdownlinks(mdContents){
    const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm ;
    const matches = mdContents.match(regexMdLinks) ;

    if(matches){
        const singleMatch = /\[([^\[]+)\]\((.*)\)/ ;
        var res = mdContents;
        for (var i = 0; i < matches.length; i++) {
            var text = singleMatch.exec(matches[i]);
            res = (res.replace(matches[i],`<a className='red-link' href='${text[2]}'>${text[1]}</a>`));
        }
        return res;
    }else{
        return mdContents;
    }


}

function markdownToHtml(mdContents){
    var md = new MarkdownIt(); 
    var el = ( md.render(mdContents)
    
    .replaceAll("&lt;","<")
    .replaceAll("&gt;",">"))
    .replace(/<a href\b(?![^>]*\bhttp)([^>]*)>(.*?)<\/a>/gi, '<Link className="red-link" to$1>$2</Link>')
    .replaceAll("<a","<a className='red-link'" )

    return  el;
}

export default function MyComponent(props) {
    return (
        <JsxParser
        components={{Link}}
        jsx={markdownToHtml(props.content)}
        className={props.className}
        ></JsxParser>
  )
}


export function BlueZone(props){
    const content = props.content;
    return <>
    
            {content.map((element, index) => (
                      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
                        { index % 2 == 1 && <>
                            <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
                                <h2 className="textLeft">{element.pgimg.title}</h2>
                                <JsxParser
                                    components={{Link}}
                                    jsx={markdownToHtml(element.pgimg.content)}
                                    className="checked blue-paragraph"
                                    >
                                </JsxParser>
                            </Grid> </>
                        }
                      <Grid justifyContent="center" item xs={12} md={6} >
        
                        { ( element.pgimg.thumbnail == "/animated-svg-circle-map" || element.pgimg.thumbnail == null )   && <div style={{width: '80%'}}>
                          <CircleMapPath></CircleMapPath>
                         </div>
                         }
                        { ( element.pgimg.thumbnail != "/animated-svg-circle-map" && element.pgimg.thumbnail != null )   && <div style={{width: '100%'}}>

                            <img style={{
                            display:'block',
                            width:"80%",
                            margin:"auto"
                            }} src={ element.pgimg.thumbnail } alt="delivery signature" />

                            </div>
                         }
                      </Grid>
                      { index % 2 == 0 && <>
                            <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
                                <h2 className="textLeft">{element.pgimg.title}</h2>
                                <JsxParser
                                    components={{Link}}
                                    jsx={markdownToHtml(element.pgimg.content)}
                                    className="checked  blue-paragraph"
                                    >
                                </JsxParser>
                            </Grid> </>
                        }
              
                    </Grid>
            ))}
        
    </>

}

export function BlueZone2(props){
    const content = props.content;
    return <>
            <Grid container>
                {content.map((element, index) => (
                            <Grid item xs={12} md={6}>
                        
                            <Grid container className="" style={{margin:"auto"}} >
                                <Grid item xs={2} md={2}>
                                <img  style={{width:"60%"}} src={ element.pgimg.thumbnail } alt="Blue Logo" />
                                </Grid>
                                <Grid item xs={10} md={10}>
                                    <h2 className="textLeft">{element.pgimg.title}</h2>
                                <JsxParser
                                    components={{Link}}
                                    jsx={markdownToHtml(element.pgimg.content)}
                                    className="checked blue-paragraph"
                                    >
                                </JsxParser>
                                </Grid>
                            </Grid>
                        
                            </Grid>

                ))}
            </Grid>
        
    </>

}