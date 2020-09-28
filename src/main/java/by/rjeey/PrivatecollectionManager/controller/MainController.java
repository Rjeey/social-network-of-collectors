package by.rjeey.PrivatecollectionManager.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
public class MainController {

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @GetMapping("*")
    public ModelAndView defaultPage(Map<String, Object> model) {
        model.put("contextPath", contextPath);
        return new ModelAndView("index", model);
    }
}
