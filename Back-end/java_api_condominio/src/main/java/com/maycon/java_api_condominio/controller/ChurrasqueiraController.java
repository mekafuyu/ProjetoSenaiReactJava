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

import com.maycon.java_api_condominio.model.ChurrasqueiraModel;
import com.maycon.java_api_condominio.service.ChurrasqueiraService;

@RestController
@RequestMapping("/churrasqueira")
public class ChurrasqueiraController {
        
    @Autowired
    private ChurrasqueiraService churrasqueiraService;

    @GetMapping 
    public List<ChurrasqueiraModel> getAllChurrasqueira()
    {
        List<ChurrasqueiraModel> listRes = this.churrasqueiraService.findAll();
        return listRes;
    }

    @GetMapping("/condo/{id}")
    public List<ChurrasqueiraModel> getChurrasqueirasByCondo(@PathVariable String id)
    {
        List<ChurrasqueiraModel> listRes = this.churrasqueiraService.findByCondoId(id);
        return listRes;
    }

    @GetMapping("/condo/{id}/{number}")
    public List<ChurrasqueiraModel> getChurrasqueirasByCondo(@PathVariable String id, @PathVariable String number)
    {
        List<ChurrasqueiraModel> listRes = this.churrasqueiraService.findByNumberInCondo(number, id);
        return listRes;
    }
    
    @PostMapping
    public void newChurrasqueira(@RequestBody ChurrasqueiraModel newChurrasqueira)
    {
        this.churrasqueiraService.save(newChurrasqueira);
        return;
    }

    @PostMapping("/{id}")
    public void updateVaga(@RequestBody ChurrasqueiraModel churrasqueiraToUpdate, @PathVariable String id)
    {
        this.churrasqueiraService.update(id, churrasqueiraToUpdate);
        return;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteChurrasqueira(@PathVariable String id)
    {
        this.churrasqueiraService.delete(id);
        return;
    }
}
