package com.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.entity.Driver;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {
   List<Driver> findByBrand(String brand);
}
