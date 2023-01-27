import React, {useState, useEffect} from 'react';
import API from '../../API/API';
import ReactPlayer from 'react-player'
import './videos.css';
import ReactLoading from 'react-loading';
import Pagination from '../pagination/pagination';

function Videos({searchValue = ''}) {
    

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [videoCaption, setVideoCaption] = useState('any');
    const [videoDefinition, setVideoDefinition] = useState('any')
    const [nextPage, setNextPage] = useState('')
    const [prevPage, setPrevPage] = useState('')

    useEffect(()=>{
        setLoading(true);
        API
        .readAll(searchValue, videoCaption, videoDefinition, nextPage, prevPage)
        .then(async (response) => {
          setData(response);
        
          await setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

    }, [searchValue, videoCaption, videoDefinition, nextPage, prevPage])

    const displayFilters =()=>{
        if(document.getElementById('card__filter--items').style.display==='none'||document.getElementById('card__filter--items').style.display===''){
            document.getElementById('card__filter--items').style.display="flex";

        }else{
            setVideoCaption('any');
            setVideoDefinition('any');
            document.getElementById('card__filter--items').style.display='none'
        }
    }

    const handleCaptions = (e)=>{
        setVideoCaption(e.target.value);
    }
    const handleDefinition = (e)=>{
        setVideoDefinition(e.target.value);
    }
    return (
      <div className="card">
        <div className="card__title">
            <h5>About {data?.pageInfo.totalResults} Results</h5>
            <h5 className="card__filter" onClick={displayFilters}>&#9776; Filter</h5>
        </div>
        <div id="card__filter--items">
            <select onChange={handleCaptions}>
                <option hidden>Video Caption</option>
                <option value='any'>Do not filter results based on caption availability</option>
                <option value='closedCaption'>Only include videos that have captions</option>
                <option value='none'>Only include videos that do not have captions</option>
            </select>
            <select onChange={handleDefinition}>
                <option hidden>Video Definition</option>
                <option value='any'> Return all videos, regardless of their resolution.</option>
                <option value='high'>Only retrieve HD videos.</option>
                <option value='standard'>Only retrieve videos in standard definition.</option>
            </select>

        </div>
        {loading?  <ReactLoading type={'spin'} color="black" />:<>
        {data?.items.map((item,index)=>(
            <div className="card__body" key={item.id.videoId}>
                <div className="card__video">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${item.id.videoId}`} width="100%" height="100%"/>
                </div>
                <div className="card__text">
                    <h1>Title</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
        ))}
        </>}
        <Pagination nextPage={event => setNextPage(data?.nextPageToken)} prevPage={event => setPrevPage(data?.prevPageToken )}/>
      </div>
    );
  }
  
  export default Videos;
  