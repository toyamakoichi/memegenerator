import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
import saveAs from "file-saver";
import { Box, Modal } from "@mui/material";
import { Button } from "../button/button";
import { styles } from "../common/modal.styles";
import { Input } from "../input/input";
import { ProgressiveImg } from "../progressiveimg/progressiveimg";
import { CreateContainer, MemeContainer, MemeImage } from "./edit.styles";


export const Edit = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [captions, setCaptions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [memeDatas, setMemeData] = useState('');

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setMemeData('');
  }
  const currentId = location.state.id;
  const goToMemes = () => {
    navigate("/main/memes");
  }
  const generateMeme = async () => {
    try {

      handleOpen();

      const formData = new FormData();
      formData.append('username', 'asfasfas124124');
      formData.append('password', 'f9Gpgs7g8CtehGW');
      formData.append('template_id', currentId);
      captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

      const memeData = await axios({
        method: "post",
        url: "https://api.imgflip.com/caption_image",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      setMemeData(memeData.data.data.url);


    }
    catch {
      console.error();
    }

  }

  const updateCaption = (e: any, index: number) => {
    const text = e.target.value || '';
    setCaptions(captions.map((c: string, i: number) => {
      if (index === i) { return text; }
      else { return c; }
    }));
  }

  const downloadImage = async () => {
    const formData = new FormData();
    formData.append('username', 'asfasfas124124');
    formData.append('password', 'f9Gpgs7g8CtehGW');
    formData.append('template_id', currentId);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));

    const memeData = await axios({
      method: "post",
      url: "https://api.imgflip.com/caption_image",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    saveAs(memeData.data.data.url, location.state.id);
  }
  useEffect(() => {
    setCaptions(Array(location.state.boxCount).fill(''));
  }, [currentId])
  useEffect(() => {

  })
  return (
    <>
    
    <CreateContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <ProgressiveImg placeholderSrc={location.state.image} src={memeDatas} />
        </Box>
      </Modal>
      <MemeContainer>
        <MemeImage src={location.state.image} alt="" />
        <div>
          {
            captions.map((c, index) => (<Input onChange={(e) => updateCaption(e, index)} key={index} />))
          }
        </div>
      </MemeContainer>
      <Button onClick={generateMeme} text="Generate meme" />
      <Button onClick={downloadImage} text="Download meme" />
      <Button onClick={goToMemes} text="Make more memes" />
    </CreateContainer>
    </>
  )
}