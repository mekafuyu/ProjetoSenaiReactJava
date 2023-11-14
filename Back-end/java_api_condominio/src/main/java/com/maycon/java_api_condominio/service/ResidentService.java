package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.ResidentModel;
import com.maycon.java_api_condominio.repository.ResidentRepository;

@Service
public class ResidentService {
    
    @Autowired
    private ResidentRepository residentRepository;

    public ResidentModel save(ResidentModel residentModel)
    {
        return this.residentRepository.save(residentModel);
    }

    public void save(String id, String name, String cep)
    {
        ResidentModel newResident = new ResidentModel(id, name, cep);
        this.residentRepository.save(newResident);
        return;
    }

    public List<ResidentModel> findAll()
    {
        return (List<ResidentModel>) this.residentRepository.findAll();
    }

    public List<ResidentModel> findByName(String name)
    {
        return (List<ResidentModel>) this.residentRepository.findByName(name);
    }

    public void delete(String id)
    {
        this.residentRepository.deleteById(id);
        return;
    }
}
