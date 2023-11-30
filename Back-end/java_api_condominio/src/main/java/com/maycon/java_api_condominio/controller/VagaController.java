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

import com.maycon.java_api_condominio.model.VagaModel;
import com.maycon.java_api_condominio.service.VagaService;

@RestController
@RequestMapping("/vaga")
public class VagaController {
        
    @Autowired
    private VagaService vagaService;

    @GetMapping 
    public List<VagaModel> getAllVaga()
    {
        List<VagaModel> listRes = this.vagaService.findAll();
        return listRes;
    }

    @GetMapping("/condo/{id}")
    public List<VagaModel> getVagasByCondo(@PathVariable String id)
    {
        List<VagaModel> listRes = this.vagaService.findByCondoId(id);
        return listRes;
    }

    @GetMapping("/condo/{id}/{number}")
    public List<VagaModel> getVagasByCondo(@PathVariable String id, @PathVariable String number)
    {
        List<VagaModel> listRes = this.vagaService.findByNumberInCondo(number, id);
        return listRes;
    }
    
    @PostMapping
    public void newVaga(@RequestBody VagaModel newVaga)
    {
        this.vagaService.save(newVaga);
        return;
    }

    @PostMapping("/{id}")
    public void updateVaga(@RequestBody VagaModel vagaToUpdate, @PathVariable String id)
    {
        this.vagaService.update(id, vagaToUpdate);
        return;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteVaga(@PathVariable String id)
    {
        this.vagaService.delete(id);
        return;
    }
}
