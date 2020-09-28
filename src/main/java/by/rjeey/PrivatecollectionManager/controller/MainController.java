package by.rjeey.PrivatecollectionManager.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
public class MainController {

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @GetMapping(value ={"/","/home","/list", "/profile", "/login"})
    public String getIndex(HttpServletRequest request) {
        return "index.html";
    }
}
