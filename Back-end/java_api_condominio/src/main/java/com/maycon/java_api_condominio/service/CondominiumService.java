package com.maycon.java_api_condominio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maycon.java_api_condominio.model.CondominiumModel;
import com.maycon.java_api_condominio.repository.CondominiumRepository;

@Service
public class CondominiumService {

    @Autowired
    private CondominiumRepository condominiumRepository;

    public CondominiumModel save(CondominiumModel condominiumModel)
    {
        return this.condominiumRepository.save(condominiumModel);
    }

    public void save(String id, String name, String cep)
    {
        CondominiumModel newCondo = new CondominiumModel(id, name, cep);
        this.condominiumRepository.save(newCondo);
        return;
    }

    public List<CondominiumModel> findAll()
    {
        return (List<CondominiumModel>) this.condominiumRepository.findAll();
    }

    public List<CondominiumModel> findByName(String name)
    {
        List<CondominiumModel> listRes = this.condominiumRepository.findByName(name);
        System.out.println(listRes);
        return listRes ;
    }

    public void delete(String id)
    {
        this.condominiumRepository.deleteById(id);
        return;
    }
}
