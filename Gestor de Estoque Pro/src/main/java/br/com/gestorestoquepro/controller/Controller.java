package br.com.gestorestoquepro.controller;

import br.com.gestorestoquepro.model.Produto;
import br.com.gestorestoquepro.repository.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Controller {

    @Autowired
    private Repository repository;

    @GetMapping("/")
    public Iterable<Produto> selecionar() {
        return repository.findAll();
    }

    @PostMapping("/")
    public Produto cadastrar(@RequestBody Produto produto) {
        return repository.save(produto);
    }

    @PutMapping("/")
    public Produto editar(@RequestBody Produto produto) {
        return repository.save(produto);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id) {
        repository.deleteById(id);
    }


}
