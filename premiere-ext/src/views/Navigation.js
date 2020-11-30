import React, { useState } from "react"
import SearchButton from '../comp/SearchButton'
import SettingsButton from '../comp/SettingsButton'
import { useHistory } from "react-router-dom"
function Navigation(props) {
    const history = useHistory()

    const [term, setTerm] = useState("")
    const [type, setType] = useState("all")

    const onTypeChanged = (evt)=>{
        setType(evt.target.value)
    }
    const onSearch = (evt) => {
        history.push("/search/" + term + "/" + type)
      }
    
      const onSettings = (evt) => {
        history.push("/settings")
      }
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <svg className="logo-padding" viewBox="0 0 2265 673" fill="#fff" height="30"><path d="M238.3.8l270.2 93.7-15.2 37.8zm-5.8 20.5l286.1 145.3-150.4 290.7-57.4-32.7 165.5-222.2z"></path><path d="M197 21.3l251 190.8-206.3 256.2-42.3-35.1L406.8 236z"></path><path d="M300.5 207.2L22.6 274.3 33 312.7zM300 231L.6 346.2l121 305L183 623 39.7 385z"></path><path d="M333.8 231L67.4 398.8 248 672.3l46-30.8-188-215.8zm1841.8-2H2131l-88.9 223.5h46.2l22.2-54.3h85.5l22.2 54.6h46.2l-89-223.7zm6.8 129.8h-58.1l29-88.8 29.1 88.8zM1679.3 333a59.6 59.6 0 0013.7-37.5 58 58 0 00-29-51.2 114 114 0 00-58.2-13.6h-97.5V454h42.8v-92h59.8l46.2 92.3h44.4l-49.4-100.7c10.4-5 19.7-12 27.2-20.6zm-29-39.2a31 31 0 01-10.3 23.9c-4.8 3.5-10 6.3-15.4 8.5-7.3 1.5-14.8 2-22.2 1.7h-52.9v-64.7h56.4c10.5-.6 21 1.2 30.8 5.2 8.9 5.4 14 15.2 13.6 25.6v-.2zm-248 39.2a59.4 59.4 0 0013.7-37.5 58 58 0 00-29-51.2 113.9 113.9 0 00-58.2-13.6h-97.4V454h42.7v-92h59.9l46.1 92.3h44.5L1375 353.7a82 82 0 0027.3-20.6zm-29-39c.2 9-3.5 17.8-10.3 23.8-4.7 3.5-9.9 6.4-15.4 8.6-7.3 1.4-14.7 2-22.2 1.7h-53v-64.9h56.4c10.6-.6 21 1.2 30.8 5.2 9 5.3 14.2 15.2 13.7 25.6zM734.6 416.6L861 257.2v-28.5H681.8v38.5h119.5l-124 153.6-.6.6V455h187.6v-38.4zM1081.2 233c-90.3-31.4-178.3 56.4-146.7 146.6a115.9 115.9 0 0071 70.8c90.2 31.5 178.2-56.4 146.7-146.5a116 116 0 00-71-70.9zm35.7 89.8a76.3 76.3 0 01-92.6 92.4 77.1 77.1 0 01-54.6-54.2 76.3 76.3 0 0192.7-92.5 77.3 77.3 0 0154.5 54.3zm803.7-89.8c-90.2-31.3-178.2 56.4-146.8 146.5a116.2 116.2 0 0071 70.9c90.3 31.6 178.4-56.4 146.8-146.5a116 116 0 00-71-70.9zm34 89.8a76.3 76.3 0 01-92.6 92.4 77.1 77.1 0 01-54.5-54.5 76.3 76.3 0 0192.6-92.4 77.1 77.1 0 0154.6 54.5z"></path></svg>
                </div>
                <div className="col-6">
                    <div className="row"><div className="col-12">
                        <input type="text" placeholder="search term" onChange={e => setTerm(e.target.value)}/>
                        <SearchButton onpress={onSearch} /></div></div>
                    <div className="row no-padding">
                        <div className="col-12">
                            <ul><li><input type="radio" name="type" value="all" checked={type === "all"} onChange={onTypeChanged} /><label className="ul-label" htmlFor="all">all</label></li>
                                <li><input type="radio" name="type" value="video" checked={type === "video"}  onChange={onTypeChanged}/><label className="ul-label" htmlFor="video">video</label></li>
                                <li><input type="radio" name="type" value="image" checked={type === "image"}  onChange={onTypeChanged}/><label className="ul-label" htmlFor="image">image</label></li>
                                <li><input type="radio" name="type" value="document" checked={type === "document"}  onChange={onTypeChanged}/><label className="ul-label" htmlFor="document">document</label></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-right logo-padding"><SettingsButton  onpress={onSettings} /></div>
            </div>
        </div>
    )
}
export default Navigation