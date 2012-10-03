package pl.touk.workshop.angular;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CorsFilter implements Filter {

    public void init(FilterConfig fConfig) throws ServletException { }

    public void destroy() { }

    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.addHeader("Access-Control-Allow-Origin", httpRequest.getHeader("Origin"));
        httpResponse.addHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        chain.doFilter(request, response);
    }

}