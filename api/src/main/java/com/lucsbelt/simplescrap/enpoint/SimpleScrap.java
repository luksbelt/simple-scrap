package com.lucsbelt.simplescrap.enpoint;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleScrap {
	
	
	@CrossOrigin
	@GetMapping(value = "/scrap", produces = MediaType.APPLICATION_JSON_VALUE)
	public HashMap<String, String> getScrap(String target, String query) {
		if(target == null || query == null || target.isBlank() || query.isBlank()) {
			return null;
		}
		Document targetDocument = null;
		URL url = null;
		try {
			url = new URL(target);
		} catch (MalformedURLException e1) {
			// TODO treat error
			e1.printStackTrace();
		}
		try {
			targetDocument = Jsoup.connect(url.toString()).get();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Elements targetElement = targetDocument.getAllElements();
		String[] arr = query.split("((?<=:text)|(?=:text))");
		
		targetElement = targetElement.select(arr[0]);
		String res = "";
		if(arr.length > 1) {
			res = targetElement.text();
		}
		else {
			res = targetElement.toString();
		}
		HashMap<String, String> response = new HashMap<String, String>();
		response.put("res", res);
		return response;
	}

}
