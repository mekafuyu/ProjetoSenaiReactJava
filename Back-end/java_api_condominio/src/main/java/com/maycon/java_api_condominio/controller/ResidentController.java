package com.maycon.java_api_condominio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maycon.java_api_condominio.dto.UserLogin;
import com.maycon.java_api_condominio.model.ResidentModel;
import com.maycon.java_api_condominio.service.ResidentService;

@RestController
@RequestMapping("/resident")
public class ResidentController {
        
    @Autowired
    private ResidentService residentService;

    @GetMapping 
    public List<ResidentModel> getAllResident()
    {
        List<ResidentModel> listRes = this.residentService.findAll();
        return listRes;
    }

    @GetMapping("/condo/{id}")
    public List<ResidentModel> getResidentsByCondo(@PathVariable String id)
    {
        List<ResidentModel> listRes = this.residentService.findByCondoId(id);
        return listRes;
    }

    @GetMapping("/condo/{id}/{name}")
    public List<ResidentModel> getResidentsByCondo(@PathVariable String id, @PathVariable String name)
    {
        List<ResidentModel> listRes = this.residentService.findByCondoIdAndName(id, name);
        return listRes;
    }

    @GetMapping("/{name}")
    public List<ResidentModel> getResidentsByName(@PathVariable String name)
    {
        List<ResidentModel> listRes = this.residentService.findByName(name);
        return listRes;
    }
    
    @PostMapping
    public void newResident(@RequestBody ResidentModel newResident)
    {
        this.residentService.save(newResident);
        return;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginResident(@RequestBody UserLogin userLogin)
    {
        ResidentModel resident = this.residentService.findByCpf(userLogin.getCpf());
        if(resident.getId() == null || !resident.getPwd().equals(userLogin.getPwd()))
            return new ResponseEntity<String>("Usuário ou senha incorretos.", HttpStatus.UNAUTHORIZED);
        return new ResponseEntity<ResidentModel>(resident, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteResident(@PathVariable String id)
    {
        this.residentService.delete(id);
        return;
    }
}
