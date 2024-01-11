//package com.edufusion.edufusion.tenant.handler;
//
//
//import io.jsonwebtoken.lang.Strings;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.extern.slf4j.Slf4j;
//import org.aspectj.lang.annotation.Aspect;
//import org.aspectj.lang.annotation.Before;
//import org.springframework.stereotype.Component;
//import org.springframework.web.context.request.RequestContextHolder;
//import org.springframework.web.context.request.ServletRequestAttributes;
//
//import javax.naming.AuthenticationException;
//
//@Aspect
//@Component
//@Slf4j
//public class TenantAspect {
//    @Before("com.jfs.cloud.files.infrastructure.tenant.handler.joinpoint.TenantAspectJoinPoint.execPointcut()")
//    public void exec() throws Throwable {
//        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
//        String tenantId = request.getHeader("Tenant-Id");
//        if (Strings.isNullOrEmpty(tenantId) || !validate(tenantId))
//            throw new AuthenticationException("Tenant-Id: " + tenantId + " not authenticated");
//        log.info("Tenant-Id: " + tenantId + " authenticated");
//    }
//
//
//    private boolean validate(String tenantId) {
//        return true; //TODO: To be implemented
//    }
//}