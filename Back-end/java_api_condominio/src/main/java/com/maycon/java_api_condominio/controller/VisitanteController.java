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

import com.maycon.java_api_condominio.model.VisitanteModel;
import com.maycon.java_api_condominio.service.VisitanteService;

@RestController
@RequestMapping("/visitante")
public class VisitanteController {
        
    @Autowired
    private VisitanteService visitanteService;

    @GetMapping 
    public List<VisitanteModel> getAllVisitante()
    {
        List<VisitanteModel> listRes = this.visitanteService.findAll();
        return listRes;
    }

    @GetMapping("/condo/{id}")
    public List<VisitanteModel> getVisitantesByCondo(@PathVariable String id)
    {
        List<VisitanteModel> listRes = this.visitanteService.findByCondoId(id);
        return listRes;
    }

    @GetMapping("/resident/{id}")
    public List<VisitanteModel> getVisitantesByResidentId(@PathVariable String id)
    {
        List<VisitanteModel> listRes = this.visitanteService.findByResident(id);
        return listRes;
    }

    @GetMapping("/{name}")
    public List<VisitanteModel> getVisitantesByName(@PathVariable String name)
    {
        List<VisitanteModel> listRes = this.visitanteService.findByName(name);
        return listRes;
    }
    
    @PostMapping
    public void newVisitante(@RequestBody VisitanteModel newVisitante)
    {
        this.visitanteService.save(newVisitante);
        return;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteVisitante(@PathVariable String id)
    {
        this.visitanteService.delete(id);
        return;
    }
}
