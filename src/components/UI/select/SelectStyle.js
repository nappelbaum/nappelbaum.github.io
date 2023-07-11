import React, { useEffect, useRef, useState } from "react";

const SelectStyle = (props) => {
  const selectContent = useRef(null);
  const selectTitle = useRef(null);
  const [closeSelect, setCloseSelect] = useState(false);

  document.onclick = function () {
    setCloseSelect((prev) => !prev);
  };
  useEffect(() => {
    selectContent.current.classList.remove("select__content--active");
    selectTitle.current.classList.remove("select__title--focus");
  }, [closeSelect, selectContent, selectTitle]);

  return (
    <div
      className={props.className}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="select__title"
        ref={selectTitle}
        tabIndex="0"
        onClick={(e) => {
          selectContent.current.classList.toggle("select__content--active");
          e.target.classList.add("select__title--focus");
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter")
            selectContent.current.classList.toggle("select__content--active");
          if (e.code === "ArrowDown") {
            e.preventDefault();
            e.target.nextElementSibling.firstElementChild.lastElementChild.focus();
          }
        }}
      >
        {props.catQuery ? props.catCaption : props.defaultval}
      </div>
      <div className="select__content" ref={selectContent}>
        <div>
          <input
            className="select__input"
            id="0"
            type="radio"
            name="myRadio"
            value=""
            defaultChecked={props.catQuery === "" ? true : false}
            onClick={(e) => {
              selectContent.current.classList.remove("select__content--active");
              props.selectCatQuery(e.target.value);
            }}
          />
          <label
            htmlFor="0"
            className="select__label"
            tabIndex="-1"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                selectContent.current.classList.remove(
                  "select__content--active"
                );
                props.selectCatQuery("");
                e.target.previousElementSibling.checked = true;
              }
              if (e.code === "ArrowDown") {
                e.preventDefault();
                e.target.parentElement.nextElementSibling.lastElementChild.focus();
              }
              if (e.code === "ArrowUp") {
                e.preventDefault();
                e.target.parentElement.parentElement.previousElementSibling.focus();
              }
            }}
          >
            {props.defaultval}
          </label>
        </div>
        {props.options.map((option, index) => (
          <div key={option.cat}>
            <input
              className="select__input"
              id={index + 1}
              type="radio"
              name="myRadio"
              value={option.href}
              defaultChecked={option.href === props.catQuery ? true : false}
              onClick={(e) => {
                selectContent.current.classList.remove(
                  "select__content--active"
                );
                props.selectCatQuery(e.target.value);
              }}
            />
            <label
              htmlFor={index + 1}
              className="select__label"
              tabIndex="-1"
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  selectContent.current.classList.remove(
                    "select__content--active"
                  );
                  props.selectCatQuery(option.href);
                  e.target.previousElementSibling.checked = true;
                }
                if (
                  e.code === "ArrowDown" &&
                  index < props.options.length - 1
                ) {
                  e.preventDefault();
                  e.target.parentElement.nextElementSibling.lastElementChild.focus();
                }
                if (e.code === "ArrowUp") {
                  e.preventDefault();
                  e.target.parentElement.previousElementSibling.lastElementChild.focus();
                }
              }}
            >
              {option.cat}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
