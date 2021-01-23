import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import classes from "./AddProduct.module.css";
import MySelector from "../../@components/MySelector/MySelector";
import RedCancel from "../../assets/Images/redCancel.svg";
import { addNewProduct } from "../../@store/product/ProductActions";

const AddProduct = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [isDisable, setIsDisable] = useState(true);
  const [difficulty] = useState("1");

  useEffect(() => {
    if (description === "" || file === null) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [description, file]);

  const uploadFile = (event) => {
    let file1 = event.target.files[0];
    if (file1.type.split("/")[0] === "image") {
      if (!isImage(file1.type)) {
        toast.error("Choosen image file formate is not supported.");
        return;
      }
    } else {
      toast.error("Choosen file formate is not supported.");
      return;
    }

    if (Math.floor(file1.size / 1048576) > 5) {
      toast.error("File size is too big please upload file less then 5MB");
    } else {
      setFile(file1);
    }
  };
  const cancelUploadFile = () => {
    setFile(null);
  };
  const addPost = (title, description, difficulty, category, file) => {
    dispatch(
      addNewProduct({
        userId: localStorage.getItem("userId"),
        title: title,
        description: description,
        difficulty: difficulty,
        imageFile: file,
        category: category,
      })
    );
  };

  const isImage = (type) => {
    const mimeTypes = ["image/gif", "image/jpeg", "image/png"];
    return mimeTypes.includes(type);
  };
  return (
    <>
      <div className={classes.addPost}>
        <div className={classes.addPost__textareaContainer}>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Name Of Product"
            className={classes.addPost__textarea}
            style={{ padding: "10px", paddingLeft: "20px" }}
          />
          <CancelOutlinedIcon
            onClick={() => setShowModal(false)}
            className={classes.addPost__cancelModal}
          />
        </div>
        <div className={classes.addPost__textareaContainer}>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Write description here"
            className={classes.addPost__textarea}
          />
        </div>
        {file && (
          <div className={classes.addPost__filePreivew}>
            <div className={classes.addPost__filePreviewContainer}>
              <div className={classes.addPost__cancelOptionContainer}>
                <img
                  alt="closeIcon"
                  src={RedCancel}
                  className={classes.addPost__cancelOption}
                  onClick={() => {
                    if (file) {
                      cancelUploadFile();
                    }
                  }}
                />
              </div>
              <div className={classes.addPost__recipeImageContainer}>
                <img
                  alt="recipeImage"
                  src={URL.createObjectURL(file)}
                  className={classes.addPost__recipeImage}
                />
              </div>
            </div>
          </div>
        )}
        <div className={classes.addPost__selectorsContainer}>
          <div className={classes.addPost__mySlider}>
            <div className={classes.addPost__mySelector}>
              <p>Category</p>
              <div>
                <MySelector category={category} setCategory={setCategory} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.addPost__bottomPart}>
          <div className={classes.addPost__bottomPartAddoptions}>
            <p>Add to your Post</p>

            <div className={classes.addPost__addMediaContainer}>
              <div className={classes.addPost__addImageContainer}>
                <input
                  type="file"
                  id="uploadImage"
                  accept="image/*"
                  className={classes.addPost__addVideoInput}
                  value={""}
                  onChange={uploadFile}
                />
                <label
                  htmlFor="uploadImage"
                  className={classes.addPost__addMediaLabel}
                >
                  <PhotoOutlinedIcon />
                </label>
              </div>
            </div>
          </div>
          <div className={classes.addPost__bottomPartAddButtonContainer}>
            <button
              disabled={isDisable}
              className={`${
                isDisable ? classes.disableButton : classes.addPost__postbutton
              }`}
              onClick={(event) => {
                event.preventDefault();
                addPost(title, description, difficulty, category, file);
                setShowModal(false);
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
