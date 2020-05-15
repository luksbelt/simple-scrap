import React, { useState } from "react";
import { Button, TextField, Switch } from "@material-ui/core";

const Search = () => {
  const [url, updateUrl] = useState([]);
  const [query, updateQuery] = useState([]);
  const [result, updateResult] = useState([]);

  function request() {
    fetch("http://localhost:8080/scrap?target=" + url + "&query=" + query)
      .then((response) => response.json())
      .then((data) => {
        updateResult(data.res);
      }, console.error);
  }

  return (
    <div
      className="search-params"
      style={{ padding: 16, margin: "auto", maxWidth: 600 }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          request();
        }}
      >
        <TextField
          htmlFor="url"
          label="URL"
          id="url"
          value={url}
          placeholder="url"
          fullWidth
          onChange={(e) => updateUrl(e.target.value)}
        ></TextField>
        <br />
        <TextField
          htmlFor="query"
          label="Query"
          id="query"
          value={query}
          placeholder="query"
          fullWidth
          onChange={(e) => updateQuery(e.target.value)}
        ></TextField>
        <br />
        {/* <FormControlLabel
          label="Render HTML"
          control={
            <Switch
              //   checked={state.checkedB}
              //   onChange={handleChange}
              name="checkedHTML"
              color="primary"
            />
          }
        /> */}
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginTop: 16, textAlign: "center" }}
          >
            Submit
          </Button>
        </div>
      </form>
      <div
        className="result"
        style={{ padding: 16, margin: "auto", maxWidth: 600 }}
      >
        {result}
      </div>
    </div>
  );
};

export default Search;
