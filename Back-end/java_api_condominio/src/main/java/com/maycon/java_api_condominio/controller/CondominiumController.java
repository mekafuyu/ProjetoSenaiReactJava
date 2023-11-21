package com.maycon.java_api_condominio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maycon.java_api_condominio.model.CondominiumModel;
import com.maycon.java_api_condominio.service.CondominiumService;

@RestController
@RequestMapping("/condominium")
public class CondominiumController {
    
    @Autowired
    private CondominiumService condominiumService;

    @GetMapping
    public List<CondominiumModel> getAllCondominium()
    {
        List<CondominiumModel> listRes = this.condominiumService.findAll();
        return listRes;
    }

    @GetMapping("/{name}")
    public List<CondominiumModel> getCondominiumsByName(@PathVariable String name)
    {
        System.out.println("==============="+name+"==================");
        List<CondominiumModel> listRes = this.condominiumService.findByName(name);
        System.out.println(listRes);
    
        return listRes;
    }
    
    @PostMapping("")
    public void newCondo(@RequestBody CondominiumModel newCondo)
    {
        this.condominiumService.save(newCondo);
        return;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCondo(@PathVariable String id)
    {
        this.condominiumService.delete(id);
        return;
    }
    
}
